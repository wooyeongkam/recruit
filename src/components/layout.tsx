import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return <div className='flex justify-center items-center h-screen'>{children}</div>;
};
