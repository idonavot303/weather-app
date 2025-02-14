'use client';

import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVariant } from '@/store/actions';
import { RootState } from '@/store';
import { Variant } from '@/types';

export default function useToggle(initialValue: boolean) {
  const dispatch = useDispatch();
  const currentVariant = useSelector(
    (state: RootState) => state.abTest.variant
  );

  const toggle = useCallback(() => {
    const newVariant: Variant = currentVariant === 'A' ? 'B' : 'A';
    dispatch(setVariant(newVariant));
  }, [dispatch, currentVariant]);

  return {
    value: currentVariant === 'B',
    toggle,
  };
}
