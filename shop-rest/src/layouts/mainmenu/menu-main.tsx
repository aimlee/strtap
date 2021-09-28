import React from 'react';
import { MainMenu } from 'components/main-menu';
import { useRouter } from 'next/router';
import ErrorMessage from 'components/error-message/error-message';
import styled from 'styled-components';
import Sticky from 'react-stickynode';
import MenuWalker from 'components/menu-walker/menu-walker';
import useMainMenu from 'data/use-mainmenu';


const MainMenuWrapper = styled.div({
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: '1fr 1fr',
  gridAutoRows: 'max-content',
  paddingBottom: 30,

  '@media (min-width: 550px) and (max-width: 990px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
});

const MobileOnly = styled.div({
  display: 'none',
  zIndex: 10,

  '@media (max-width: 990px)': {
    display:'block',
  },
});


interface Props {
  type: string;
}

export const MainMenuPage = ({ type }: Props) => {
  const router = useRouter();
  const { data, error } = useMainMenu({ type });

  if (error) return <ErrorMessage message={error.message} />;
  if (!data) return null;
  const { pathname, query } = router;
  const selectedQueries = query.mainMenu;

  const onMenuClick = (slug: string) => {
    const newWindow = window.open(slug, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  };

  return (
    <React.Fragment>
      <MobileOnly>
        <Sticky top={67}>
          <MenuWalker
            style={{
              backgroundColor: '#ffffff',
              paddingTop: '15px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
            }}
          >
            <MainMenuWrapper>
              <MainMenu
                data={data}
                onClick={onMenuClick}
                active={selectedQueries}
              />
            </MainMenuWrapper>
          </MenuWalker>
        </Sticky>
      </MobileOnly>
    </React.Fragment>
  );
};
