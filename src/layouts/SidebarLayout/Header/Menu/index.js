import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  styled
} from '@mui/material';
import { useRef, useState } from 'react';
import Link from 'src/components/Link';

import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import Scrollbar from 'src/components/Scrollbar';
import Logo from 'src/components/LogoSign';
import SidebarMenu from '../../Sidebar/SidebarMenu';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);


function HeaderMenu() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListWrapper
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
        <List disablePadding component={Box} display="flex">
        <Scrollbar>
          <Box mt={3}>
            <Box
              mx={2}
              sx={{
                width: 52
              }}
            >
              <Logo />
            </Box>
          </Box>
          <Divider
          
          />
          <SidebarMenu />
        </Scrollbar>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={Link}
            href="/components/buttons"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Home"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={Link}
            href="/components/buttons"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="About Us"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  Services
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={Link}
            href="/components/forms"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Contact Us"
            />
          </ListItem>
          <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
            <MenuItem sx={{ px: 3 }} component={Link} href="/">
              Services
            </MenuItem>
            <MenuItem sx={{ px: 3 }} component={Link} href="/">
              Fumigation
            </MenuItem>
            <MenuItem sx={{ px: 3 }} component={Link} href="/components/tabs">
              Carpet Cleaning
            </MenuItem>
            <MenuItem sx={{ px: 3 }} component={Link} href="/components/cards">
              Office Cleaning
            </MenuItem>
            <MenuItem sx={{ px: 3 }} component={Link} href="/components/modals">
              Modals
            </MenuItem>
          </Menu>

        </List>
      </ListWrapper>
    </>
  );
}

export default HeaderMenu;
