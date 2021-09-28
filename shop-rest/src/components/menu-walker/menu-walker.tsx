import React, { useState } from 'react';
import {
  WalkerWrapper,
} from './category-walker.style';
import { Button } from 'components/button/button';
import SpringModal from 'components/spring-modal/spring-modal';
import { useRouter } from 'next/router';

type WalkerProps = {
  parent?: string;
  child?: string;
  style?: any;
  // onClick: () => void;
};

const MenuWalker: React.FunctionComponent<WalkerProps> = ({
  children,
  style,
}) => {
  const [isOpen, setOpen] = useState(false);
  const { query } = useRouter();
  return (
    <WalkerWrapper style={style}>


      <Button variant="text"  onClick={() => setOpen(true)}>
        Order Method
      </Button>
      <SpringModal isOpen={isOpen} onRequestClose={() => setOpen(false)}>
        {children}
      </SpringModal>
    </WalkerWrapper>
  );
};

export default MenuWalker;
