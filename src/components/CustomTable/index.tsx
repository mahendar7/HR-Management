import React, { useReducer, useMemo, useEffect, useCallback, Fragment } from 'react';
import {
    Typography,
    Stack,
    TextField,
    InputAdornment,
    Button,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Pagination,
    Popover,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Box,
    SelectChangeEvent,
    useMediaQuery,
} from '@mui/material';
import { SearchOutlined, FilterAltOutlined } from '@mui/icons-material';
import { commonReducer, debounce } from '@src/utils';

export interface ColumnDef<T> {
    field: keyof T;
    headerName: string;
    filterable?: boolean;
    render?: (row: T) => React.ReactNode;
}

export interface CustomTableProps<T> {
    title: string;
    columns: ColumnDef<T>[];
    data: T[];
    renderCard: (employee: T) => React.ReactNode;
    rowsPerPage?: number;
    debounceTime?: number;
}

interface TableState {
    activeFilters: Record<string, string>;
    draftFilters: Record<string, string>;
    currentPage: number;
    anchorEl: HTMLElement | null;
    searchInputValue: string;
}

const initialState: TableState = {
    activeFilters: { searchTerm: '' },
    draftFilters: { searchTerm: '' },
    currentPage: 1,
    anchorEl: null,
    searchInputValue: '',
};

const CustomTable = <T extends Record<string, any>>({ title, columns, data = [], renderCard, rowsPerPage = 8, debounceTime = 300 }: CustomTableProps<T>) => {
    const [state, setState] = useReducer(commonReducer<TableState>, initialState);
    const { activeFilters, draftFilters, currentPage, anchorEl, searchInputValue } = state;

    const isLaptop = useMediaQuery('(min-width: 1024px)');

    useEffect(() => {
        setState({ currentPage: 1 });
    }, [activeFilters]);

    useEffect(() => {
        setState({ searchInputValue: activeFilters.searchTerm || '' });
    }, [activeFilters.searchTerm]);

    const debouncedSearch = useCallback(
        debounce((value: string) => {
            setState({ activeFilters: { ...activeFilters, searchTerm: value } });
        }, debounceTime),
        [debounceTime, activeFilters]
    );

    const handleFilterPopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setState({ draftFilters: { ...activeFilters }, anchorEl: event.currentTarget });
    };

    const handleFilterPopoverClose = () => {
        setState({ anchorEl: null });
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setState({ searchInputValue: value });
        debouncedSearch(value);
    };

    const handleColumnFilterChange = (column: string, event: SelectChangeEvent) => {
        const value = event.target.value;
        setState({ draftFilters: { ...draftFilters, [column]: value } });
    };

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setState({ currentPage: value });
    };

    const resetFilters = () => {
        setState({ activeFilters: initialState.activeFilters, draftFilters: initialState.draftFilters });
    };

    const applyFilters = () => {
        setState({ activeFilters: { ...draftFilters }, anchorEl: null });
    };

    const filteredData = useMemo(() => {
        return data.filter(row => {
            if (activeFilters.searchTerm) {
                const searchTermLower = activeFilters.searchTerm.toLowerCase();
                const matchesSearch = columns.some(column => {
                    const value = row[column.field];
                    return value !== undefined && value !== null && String(value).toLowerCase().includes(searchTermLower);
                });
                if (!matchesSearch) return false;
            }

            for (const key in activeFilters) {
                if (key === 'searchTerm' || !activeFilters[key]) continue;

                const rowValue = row[key as keyof T];
                if (rowValue === undefined || rowValue === null) return false;

                const filterValue = activeFilters[key].toLowerCase();
                const rowValueStr = String(rowValue).toLowerCase();

                if (!rowValueStr.includes(filterValue)) return false;
            }

            return true;
        });
    }, [data, activeFilters, columns]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * rowsPerPage;

        return filteredData.slice(startIndex, startIndex + rowsPerPage);
    }, [filteredData, currentPage, rowsPerPage]);

    const uniqueFilterValues = useMemo(() => {
        return columns.reduce<Record<string, string[]>>((acc, column) => {
            if (column.filterable) {
                acc[column.field as string] = [...new Set(data.map(row => String(row[column.field])).filter(value => value !== undefined && value !== null))];
            }
            return acc;
        }, {});
    }, [columns, data]);

    const startRecord = filteredData.length > 0 ? (currentPage - 1) * rowsPerPage + 1 : 0;
    const endRecord = Math.min(currentPage * rowsPerPage, filteredData.length);

    return (
        <Stack sx={{ height: '100%' }}>
            {/* Header with Search and Filter Button*/}
            <Stack justifyContent='space-between' sx={{ py: 2, flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, gap: { xs: 2, md: 0 } }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Stack direction='row' alignItems='center' spacing={2}>
                    <TextField
                        placeholder='Search keyword...'
                        size='small'
                        value={searchInputValue}
                        onChange={handleSearchChange}
                        sx={{ maxWidth: 300 }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <SearchOutlined fontSize='small' />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    <Button
                        variant='outlined'
                        startIcon={<FilterAltOutlined />}
                        onClick={handleFilterPopoverOpen}
                        color={Object.keys(activeFilters).some(key => key !== 'searchTerm' && activeFilters[key]) ? 'success' : 'primary'}
                        disabled={!columns.some(column => column.filterable)}>
                        Filter
                    </Button>
                </Stack>
            </Stack>

            {/* Filters Popover */}
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleFilterPopoverClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
                <Box sx={{ padding: 2, width: 250 }}>
                    {columns
                        .filter(column => column.filterable)
                        .map(column => (
                            <FormControl fullWidth sx={{ mb: 2 }} key={column.field} size='small'>
                                <InputLabel>{column.headerName}</InputLabel>
                                <Select value={draftFilters[column.field] || ''} onChange={event => handleColumnFilterChange(column.field, event)} label={column.headerName}>
                                    <MenuItem value=''>All</MenuItem>
                                    {uniqueFilterValues[column.field as string]?.map((value, idx) => (
                                        <MenuItem key={idx} value={value}>
                                            {value}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        ))}
                    <Stack direction='row' justifyContent='space-between'>
                        <Button variant='outlined' onClick={resetFilters} size='small'>
                            Reset
                        </Button>
                        <Button variant='contained' onClick={applyFilters} size='small'>
                            Apply
                        </Button>
                    </Stack>
                </Box>
            </Popover>

            {/* Table/Cards */}
            {isLaptop ? (
                <TableContainer component={Paper} sx={{ boxShadow: 'none', flexGrow: 1 }}>
                    <Table stickyHeader>
                        <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                            <TableRow>
                                {columns.map(column => (
                                    <TableCell key={column.field} sx={{ color: 'text.secondary', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                                        {column.headerName}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedData.length > 0 ? (
                                paginatedData.map((row, index) => (
                                    <TableRow key={row.id || `row-${index}`} sx={{ cursor: 'pointer', '&:hover td': { backgroundColor: '#FAF1E1' } }}>
                                        {columns.map(column => (
                                            <TableCell key={`${row.id || index}-${column.field}`} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                {column.render ? column.render(row) : row[column.field]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} sx={{ textAlign: 'center', py: 10 }}>
                                        No Records found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Stack sx={{ height: '100%', overflow: 'auto' }}>
                    {paginatedData.length > 0 ? paginatedData.map(row => <Fragment key={row.id}>{renderCard(row)}</Fragment>) : <Box sx={{ height: 400 }}>No Records found</Box>}
                </Stack>
            )}

            {/* Pagination */}
            {data.length > 0 && (
                <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mt: 2, pt: 2 }}>
                    <Typography variant='body2' color='text.secondary' sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {filteredData.length > 0 ? `Showing ${startRecord} to ${endRecord} of ${filteredData.length} records` : 'No records to display'}
                    </Typography>
                    {filteredData.length > rowsPerPage && (
                        <Pagination
                            count={Math.ceil(filteredData.length / rowsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            shape='rounded'
                            color='primary'
                            sx={{ '& .MuiPaginationItem-root.Mui-selected': { bgcolor: '#5962e2', color: 'white' } }}
                        />
                    )}
                </Stack>
            )}
        </Stack>
    );
};

export default CustomTable;
