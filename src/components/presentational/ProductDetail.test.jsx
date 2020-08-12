import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ProductDetail from './ProductDetail';

import products from '../../../fixtures/products';

describe('ProductDetail', () => {
  function renderProductDetail() {
    return render((
      <ProductDetail
        product={products[0]}
      />
    ));
  }

  it('renders product detail', () => {
    const { container } = renderProductDetail();

    expect(container).toHaveTextContent('크리넥스 KF-AD 소형 마스크 팝니다.');
    expect(container).toHaveTextContent('미추홀구 용현5동');
  });

  context('when click next arrow', () => {
    it('renders next image', () => {
      const { productImages } = products[0];

      const { getByTestId, getByAltText } = renderProductDetail();

      const currentImage = getByAltText(productImages[0]);
      expect(currentImage).toHaveAttribute('src', productImages[0]);

      fireEvent.click(getByTestId('nextArrow'));

      const nextImage = getByAltText(productImages[1]);
      expect(nextImage).toHaveAttribute('src', productImages[1]);
    });
  });

  context('when click prev arrow', () => {
    it('renders prev image', () => {
      const { productImages } = products[0];

      const { getByTestId, getByAltText } = renderProductDetail();

      const currentImage = getByAltText(productImages[0]);
      expect(currentImage).toHaveAttribute('src', productImages[0]);

      fireEvent.click(getByTestId('prevArrow'));

      const prevImage = getByAltText(productImages[2]);
      expect(prevImage).toHaveAttribute('src', productImages[2]);
    });
  });
});