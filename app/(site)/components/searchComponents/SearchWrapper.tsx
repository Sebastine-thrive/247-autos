import React from 'react';

interface Props {
  children: React.ReactNode;
}

const SearchWrapper: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default SearchWrapper;
