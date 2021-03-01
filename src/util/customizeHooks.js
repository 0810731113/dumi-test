import { useEffect, useRef } from 'react';

// 只在更新是执行 类似componentDidUpdate
export const useUpdateEffect = (effect, deps) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

// 获取上一次的state或者props
export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

// 定时器hooks
export const useInterval = (fn, delay, immediate) => {
  const timerRef = useRef();

  timerRef.current = fn;

  useEffect(() => {
    if (delay === undefined || delay === null) return;
    if (immediate) {
      timerRef.current?.();
    }
    const timer = setInterval(() => {
      timerRef.current?.();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay]);
};
