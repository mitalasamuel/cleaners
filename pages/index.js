import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';
import PageHeader from 'src/content/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Box, ButtonBase, Container, Grid, Typography } from '@mui/material';
import Footer from 'src/components/Footer';
import styled from '@emotion/styled';
import Hero from 'src/content/Service';


const images = [
  {
    url: '/products/chair1.png',
    title: 'Carpet Cleaning',
    width: ['50%'],
    height: '100%'
  },
  {
    url: '/products/chair1.png',
    title: 'Carpet Cleaning',
    width: ['50%'],
    height: '100%'
  },
  {
    url: '/products/chair1.png',
    title: 'Carpet Cleaning',
    width: ['50%'],
    height: '100%'
  },
  {
    url: '/products/chair1.png',
    title: 'Carpet Cleaning',
    width: ['50%'],
    height: '100%'
  },
  {
    url: '/products/couch6.png',
    title: 'Fumigation',
    width: ['50%'],
    height: '100%'
  },
  {
    url: '/products/couch13.png',
    title: 'Office Cleaning',
    width: ['50%'],
    height: '100%'
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 300,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')(({ theme }) => ({
  position: 'absolute',
  border: '1px solid',
  margin: '1rem 0',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  color: theme.palette.common.white
}));

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  border: '1px solid',
  margin: '1rem 0',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


function Better() {
  return (
    <>
      <Head>
        <title>Better Days</title>
      </Head>
      <Box
        margin='4rem 0'
      >          
      <PageTitleWrapper>
          <PageHeader />
        </PageTitleWrapper>
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          margin='4rem 0'
          spacing={4}
        >
        </Grid>
      </Container>
      <Hero />

      <Grid display='flex'
        flexDirection='column'
        alignItems='center'>
        <Typography variant='h1' color='primary'
          my={3}>OUR SERVICES</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width,
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
      </Grid>
      <Footer />
    </>
  );
}

Better.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Better;
