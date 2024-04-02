export type StackCodeParams = {
  code: number;
  type: 'screen' | 'modal'
  name: 'loading' | 'error';
  func?: <T> (params: T) => void | Promise<void> | T | Promise<T>;
}

