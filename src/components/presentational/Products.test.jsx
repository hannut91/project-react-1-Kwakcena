import React from 'react';

import { render } from '@testing-library/react';

import Products from './Products';

import products from '../../../fixtures/products';

describe('Products', () => {
  context('with products', () => {
    it('renders products', () => {
      const { container } = render((
        <Products products={products} />
      ));

      products.forEach(({ title, region, price }) => {
        expect(container).toHaveTextContent(title);
        expect(container).toHaveTextContent(region);
        expect(container).toHaveTextContent(price);
      });
    });
  });

  context('without products', () => {
    it('renders no products message', () => {
      [[], undefined, null].forEach((emptyProducts) => {
        const { container } = render((
          <Products products={emptyProducts} />
        ));

        expect(container).toHaveTextContent('품목이 없습니다!');
      });
    });
  });
});
