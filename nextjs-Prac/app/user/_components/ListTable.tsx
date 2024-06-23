'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Image, TableProps, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import src from 'scroll-into-view-if-needed';
import { ICommentsDataType, ISearchParams } from '../../types/user';

interface TProps {
  data: ICommentsDataType[];
  params: ISearchParams;
  total: number;
  loading: boolean;
}

type OnChange = NonNullable<TableProps<ICommentsDataType>['onChange']>;
type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

const columns: TableColumnsType<Partial<ICommentsDataType>> = [
  {
    title: '#',
    dataIndex: 'id',
    align: 'center',
    sorter: true,
  },
  {
    title: '제목',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '내용',
    dataIndex: 'body',
    align: 'center',
  },
  {
    title: '이메일',
    dataIndex: 'email',
    align: 'center',
  },
  {
    title: '게시물 Id',
    dataIndex: 'postId',
    align: 'center',
    sorter: true,
  },
];

const ListTable: React.FC<TProps> = ({ params, data, total, loading }) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const [pagination, setPagination] = useState({
    current: 0,
    pageSize: 5,
    total: 0,
  });

  useEffect(() => {
    const queryValues = Object.fromEntries(searchParams.entries());

    const currentPage = Number(queryValues.page) || 1;
    const pageSize = Number(queryValues.limit) || 5;

    setPagination({
      ...pagination,
      current: currentPage,
      pageSize: pageSize,
      total: total || 0,
    });
  }, [searchParams, total]);

  return (
    <>
      <div>
        <Table
          onChange={(pagination, filters, sorter) => {
            const formValue: any = {};
            console.log(formValue);
            //@ts-ignore
            if (sorter.field) {
              // sorter: true 인 field가 있으면
              console.log('sorter?', sorter);
              //@ts-ignore
              formValue.sort = sorter.field; //formValue 객체에 넣기.
              //@ts-ignore
              formValue.direction = sorter.order === 'ascend' ? 'asc' : 'desc';
            }

            if (pagination) {
              console.log('pagination?', pagination);
              formValue.page = pagination.current;
              formValue.limit = pagination.pageSize;
            }

            //기존꺼 쿼리를 가져와서 먼저 세팅하고
            const queryValues = Object.fromEntries(searchParams.entries());
            Object.keys(queryValues).forEach((key) => {
              if (!formValue[key]) {
                formValue[key] = queryValues[key];
                if (queryValues[key] === undefined) {
                  return;
                }
              }
            });

            const params = new URLSearchParams();

            //바뀐부분있으면 그거 반영
            Object.keys(formValue).forEach((key) => {
              if (formValue[key] === undefined) {
                return;
              }
              params.set(key, formValue[key]);
              console.log('테이블 페이지네이션 변경 쿼리세팅', params);
            });

            //@ts-ignore
            if (sorter.field) {
              router.replace(`${path}?${params.toString()}`);
            } else {
              router.push(`${path}?${params.toString()}`);
            }
          }}
          loading={loading}
          pagination={pagination}
          columns={columns}
          dataSource={data}
          size={'small'}
        />
      </div>
    </>
  );
};

export default ListTable;
