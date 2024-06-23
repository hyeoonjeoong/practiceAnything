'use client';

import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { ISearchParams, ICommentsDataType } from '../types/user';
import axios from 'axios';
import UserSearchForm from './_components/UserSearchForm';
import ListTable from './_components/ListTable';

const UserListPage = () => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const [params, setParams] = useState<ISearchParams>({}); //검색파라미터
  const [initialData, setInitialData] = useState<ICommentsDataType[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();

  const fetchData = async (params: ISearchParams) => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
      );
      setLoading(false);
      const responseData = response.data;
      const fetchedData = responseData.map((item: ICommentsDataType) => {
        return {
          ...item,
          key: item.id,
        };
      });
      setTotal(response.data.length);
      setInitialData(fetchedData);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };
  //
  useEffect(() => {
    const queryValues = Object.fromEntries(searchParams.entries()); // router query를 그대로 가져온거
    fetchData(queryValues);
    console.log('메인페이지 쿼리 변경', queryValues);
  }, [searchParams]);

  return (
    <div>
      <UserSearchForm />
      <Flex justify={'space-between'} align={'center'} style={{ margin: '0' }}>
        <div> 총 개수: {total}</div>
      </Flex>

      <ListTable
        total={total}
        params={params}
        data={initialData}
        loading={loading}
      />
    </div>
  );
};

export default UserListPage;
