import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import styles from '../pages/EventByBootstrap.module.css';

import product1 from '../assets/images/event/products/product1.png';
import product2 from '../assets/images/event/products/product2.png';
import wproduct1 from '../assets/images/event/products/w-shirts.jpg';
import wproduct2 from '../assets/images/event/products/w-vest.jpg';
import eproduct1 from '../assets/images/event/products/camera.jpg';
import eproduct2 from '../assets/images/event/products/laptop.jpg';

import { type } from '@testing-library/user-event/dist/type';

const productList = [
  {
    img: product1,
    type: '셔츠/블라우스',
    productName: '데일리 베이직 셔츠 (7color)',
    percent: 50,
    price: 50000,
  },
  {
    img: product2,
    type: '셔츠/블라우스',
    productName: '스탠다드 블루종 스웨이드 자켓',
    percent: 50,
    price: 100000,
  },
  {
    img: product1,
    type: '셔츠/블라우스',
    productName: '데일리 베이직 셔츠 (7color)',
    percent: 50,
    price: 50000,
  },
  {
    img: product2,
    type: '셔츠/블라우스',
    productName: '스탠다드 블루종 스웨이드 자켓',
    percent: 50,
    price: 100000,
  },
];

const productList2 = [
  {
    img: wproduct1,
    type: '셔츠/블라우스',
    productName: '데일리 베이직 셔츠 (2color)',
    percent: 40,
    price: 60000,
  },
  {
    img: wproduct2,
    type: '조끼',
    productName: '니트 조끼',
    percent: 50,
    price: 100000,
  },
  {
    img: wproduct1,
    type: '셔츠/블라우스',
    productName: '데일리 베이직 셔츠 (2color)',
    percent: 40,
    price: 60000,
  },
  {
    img: wproduct2,
    type: '조끼',
    productName: '니트 조끼',
    percent: 50,
    price: 100000,
  },
];

const productList3 = [
  {
    img: eproduct1,
    type: '디지털 카메라',
    productName: '캐논 디지털 카메라',
    percent: 30,
    price: 200000,
  },
  {
    img: eproduct2,
    type: '노트북',
    productName: '레노버 노트북',
    percent: 2,
    price: 650000,
  },
  {
    img: eproduct1,
    type: '디지털 카메라',
    productName: '캐논 디지털 카메라',
    percent: 30,
    price: 200000,
  },
  {
    img: eproduct2,
    type: '노트북',
    productName: '레노버 노트북',
    percent: 20,
    price: 650000,
  },
];

const productLists = {
  남성의류: productList,
  여성의류: productList2,
  가전제품: productList3,
};

const AntdProductList = ({ nowFilter }) => {
  const [currentList, setCurrentList] = useState(productLists[nowFilter]);

  useEffect(() => {
    setCurrentList(productLists[nowFilter]);
  }, [nowFilter]);
  return (
    <div className={styles.top__sales_list}>
      {currentList.map((e, i) => (
        <Card cover={<img src={e.img} className={styles.product__image} />}>
          <div className={styles.product}>
            <div className={styles.content}>
              <div>
                <p>{e.type}</p>
                <h3>{e.productName}</h3>
              </div>

              <div className={styles.price__layout}>
                <p className={styles.percent}>{e.percent}%</p>
                <p className={styles.price}>{e.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AntdProductList;
