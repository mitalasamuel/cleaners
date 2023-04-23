import { Box, Container, Link, Typography, styled, Divider, Grid } from '@mui/material';

const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(4)};
`
);

function Footer() {
  return (
    <>
      <Grid
        padding={['1rem', '4rem 2rem', '4rem 8rem', '2rem 14rem',]}
        display='grid'
        gridTemplateColumns={['1fr', ' 1fr 1fr', '1fr 1fr 1fr']}
      >
        <Box margin={['2rem 0 0 0']}
          display={['flex']}
          flexDirection='column'
          >
          <Typography variant='h4'>
            Quick Links
          </Typography>
          <Box variant='p'
          >
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home </Link>
          </Box>
          <Box variant='p'
          >
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              About us </Link>
          </Box>
          <Box variant='p'
          >
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services </Link>
          </Box>
          <Box variant='p'
          >
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us </Link>
          </Box>
        </Box>

        <Box margin={['2rem 0 0 0']}
          display={['flex']}
          flexDirection='column'
          >
          <Typography variant='h4'>
            Services Offered
          </Typography>
          <Box variant='p'
          >
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ofice Cleaning </Link>
          </Box>
          <Box variant='p'
          >
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fumigation</Link>
          </Box>
          <Box variant='p'
          >
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carpet Cleaning </Link>
          </Box>
          <Box variant='p'
          >
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Car Wash</Link>
          </Box>
        </Box>
        <Box margin={['2rem 0 0 0']}
          display={['flex']}
          flexDirection='column'
          >
          <Typography variant='h4'>
            Reach to us         </Typography>
          <Box variant='p'
          >
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Grid display='flex'>

                <Box
                  component='img'
                  src='/static/images/Serve/face.svg'
                  height='1.5rem'
                  width='1.5rem'
                /><Box display={['none', 'none', 'flex']} >facebook
                </Box></Grid>
            </Link>
          </Box>
          <Box variant='p'
          >
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Grid display='flex'>
                <Box
                  component='img'
                  src='/static/images/Serve/WhatsApp.svg'
                  height='1.5rem'
                  width='1.5rem'
                />
                <Box display={['none', 'none', 'flex']} >WhatsApp
                </Box>
              </Grid>
            </Link>
          </Box>
          <Box variant='p'
          >
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Grid display='flex'>
                <Box
                  component='img'
                  src='/static/images/Serve/twitter.svg'
                  height='1.5rem'
                  width='1.5rem'
                />
                <Box display={['none', 'none', 'flex']} >twitter
                </Box></Grid>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Divider />
      <FooterWrapper>
        <Box
          pb={4}
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          padding={['1.5rem 0']}
          textAlign={{ xs: 'center', md: 'left' }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="subtitle1"
            >
              &copy; 2023 - Better days cleaning contractors | All rights reserved
            </Typography>
          </Box>
          <Typography
            sx={{
              pt: { xs: 2, md: 0 }
            }}
            variant="subtitle1"
          >
            Crafted by{' '}
            <Link
              href="https://prancetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PranceTech </Link>
          </Typography>
        </Box>
      </FooterWrapper>
    </>
  );
}

export default Footer;
