import React, { FC, useEffect, useRef, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Loading from '@/utils/loading';
import { useRouter } from 'next/router';
import { scrollBarStyle } from '../layout/panel/Layout';

interface IndexProps {
  data: any[];
  dataInfo: any[];
  numOfPage: number;
  isLoading: boolean;
  searchField: string;
  addItem?: string;
}
const PaginationTable: FC<IndexProps> = ({
  data,
  dataInfo,
  numOfPage,
  isLoading,
  searchField,
  addItem,
}) => {
  const [initData, setInitData] = useState<any[]>(data);
  const [tableData, setTableData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const ref = useRef<HTMLInputElement>(null);
  const pageRange = 2;
  const router = useRouter();

  // pagination =>
  useEffect(() => {
    setInitData(data);
    setCurrentPage(1);
  }, [data]);

  useEffect(() => {
    setCurrentPage(1);
    let pCount = Math.ceil(initData.length / numOfPage);
    pCount = pCount === 0 ? 1 : pCount;
    setPageCount(pCount);

    let pArr: number[] = [];
    for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
    setPages(pArr);
  }, [initData]);

  useEffect(() => {
    let start: number = currentPage * numOfPage - numOfPage;
    let end: number = currentPage * numOfPage;

    setTableData(initData.slice(start, end));
  }, [currentPage, initData]);

  // search =>
  const handleSetSearch = (target: string | number) => {
    setInitData(data.filter((d) => d[searchField].includes(target)));
  };

  return (
    <>
      {isLoading ? (
        <div className='w-full flex justify-center items-center'>
          <Loading />
        </div>
      ) : (
        <div>
          {/* search */}
          <div
            className='flex w-10/12 flex-col sm:flex-row 
          justify-center sm:justify-between mx-auto items-center'
          >
            <div className='flex w-full max-w-sm items-center mb-4 '>
              <Button
                type='submit'
                className='rounded-l-none shadow-black/20 shadow-md'
                onClick={() => {
                  handleSetSearch(ref.current?.value || '');
                }}
              >
                جستجو
              </Button>
              <Input
                type='text'
                className='bg-white rounded-r-none  shadow-black/20 shadow-md'
                placeholder='مقداری وارد کنید . . .'
                ref={ref}
              />
            </div>
            {addItem && (
              <div className='flex w-full max-w-sm items-center mb-4 space-x-2'>
                <Button
                  onClick={() => router.push(addItem)}
                  className='bg-blue-600 w-full sm:w-fit ms-auto text-[14px] '
                >
                  افزودن
                </Button>
              </div>
            )}
          </div>

          {/* table */}
          <div
            className={`w-10/12 min-w-20 mx-auto bg-white
           shadow-black/20 shadow-md overflow-x-auto rounded-lg ${scrollBarStyle}`}
          >
            <Table className='w-full table-auto overflow-hidden border-none rounded-lg'>
              {/* table header */}
              <TableHeader>
                <TableRow>
                  {dataInfo.map((item, index) => (
                    <TableHead
                      key={index}
                      className='text-center min-w-32 border-2 border-l-0 border-t-0
                     border-black text-[16px] text-blue-600 first:border-r-0'
                    >
                      {item.title}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              {/* table body */}
              {tableData.length > 0 && (
                <TableBody>
                  {tableData?.map((item: any, index: any) => (
                    <TableRow key={index}>
                      {dataInfo.map((t: any, indexT: any) => (
                        <TableCell
                          key={indexT}
                          className='font-medium  text-center
                        *:first-letter:text-black border border-b-0 border-l-0'
                        >
                          {t.field ? item[t.field] || '-' : t.element(item)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
            {!tableData.length && (
              <div className='w-full flex justify-center items-center  h-20 mx-auto'>
                <span className='text-blue-600 text-[17px] bg-blue-500/20 w-9/12 py-2 text-center rounded-lg font-bold'>
                  موردی یافت نشد .
                </span>
              </div>
            )}
          </div>

          {/* pagination */}
          <Pagination
            dir='ltr'
            className='mt-3 bg-white shadow-black/20 shadow-md w-fit overflow-hidden rounded-full mx-auto'
          >
            <PaginationContent>
              {/* previous pages */}
              <button
                disabled={currentPage - 1 == 0}
                className='disabled:opacity-60'
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <PaginationPrevious />
              </button>

              {/* current pages */}
              {pages.map((page) =>
                page > currentPage - pageRange && page < currentPage + pageRange ? (
                  <PaginationItem key={page} onClick={() => setCurrentPage(page)}>
                    <PaginationLink
                      className={`${
                        currentPage === page
                          ? 'text-blue-600 hover:bg-blue-600/20 hover:text-blue-600 bg-blue-600/20 '
                          : null
                      } px-2`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ) : null
              )}

              {/* last pages */}
              {currentPage < pageCount - (pageRange - 1) ? (
                <>
                  {currentPage < pageCount - pageRange ? (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : null}

                  <PaginationLink
                    className='px-2'
                    onClick={() => setCurrentPage(pageCount)}
                  >
                    <PaginationLink>{pageCount}</PaginationLink>
                  </PaginationLink>
                </>
              ) : null}

              {/* next peages */}
              <button
                disabled={currentPage + 1 > pageCount}
                className='disabled:opacity-60'
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <PaginationNext />
              </button>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  );
};

export default PaginationTable;
