import React, { useEffect, useState } from 'react';
import { Button, Flex, Form, Input } from 'antd';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import locale from 'antd/lib/locale/ko_KR';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import { ISearchParams } from '../../types/user';
dayjs.locale('ko');

const UserSearchForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const [params, setParams] = useState<ISearchParams>(null);

  const onSearch = (values: any) => {
    console.log('검색 클릭!');
    const formValue: ISearchParams = {
      name: values.name,
      email: values.email,
    };

    const params = new URLSearchParams();

    //검색 빈값 있으면 key값으로 안들어가게 리턴.
    Object.keys(formValue).forEach((key) => {
      if (formValue[key] == undefined || formValue[key] === '') {
        return;
      }
      params.set(key, formValue[key]);
    });

    params.set('page', '1');
    params.set('limit', '10');
    params.delete('order');

    setParams(formValue); //검색한 값으로 params 설정
    console.log('검색 클릭, 쿼리 세팅 값', formValue);
    router.push(`${path}?${params.toString()}`);
  };

  return (
    <Form form={form} onFinish={onSearch}>
      <Flex gap={'4rem'} wrap={'wrap'}>
        <Form.Item label={'검색어'} name={'name'} style={{ width: '300px' }}>
          <Input placeholder={'제목'} />
        </Form.Item>
        <Form.Item label={'이메일'} name={'email'} style={{ width: '300px' }}>
          <Input placeholder={'이메일'} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType={'submit'}>
            검색
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default UserSearchForm;
