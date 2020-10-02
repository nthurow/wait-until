declare module 'wait-until' {
  interface WaitUntil {
    interval: (interval: number) => WaitUntil;
    times: (interval: number) => WaitUntil;
    condition: (checkCondition: () => boolean) => WaitUntil;
    done: (onConditionTrue: () => void) => WaitUntil;
  }

  const waitUntil: (
    interval?: number,
    times?: number,
    condition?: () => boolean,
    onConditionTrue?: () => void
  ) => WaitUntil;

  export default waitUntil;
}

