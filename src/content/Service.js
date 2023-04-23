import {
    Box,
    Button,
    Container,
    Typography,
    styled,
    Grid
  } from '@mui/material';
  
  import Link from 'src/components/Link';
  
  const MuiAvatar = styled(Box)(
    ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border-radius: ${theme.general.borderRadius};
      background-color: #e5f7ff;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto ${theme.spacing(2)};
  
      img {
        width: 60%;
        height: 60%;
        display: block;
      }
  `
  );
  
  const JsAvatar = styled(Box)(
    ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      border-radius: ${theme.general.borderRadius};
      background-color: #dfebf6;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto ${theme.spacing(2)};
  
    img {
      width: 60%;
      height: 60%;
      display: block;
    }
  `
  );
  
  const NextJsAvatar = styled(Box)(
    ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};
  
      img {
        width: 60%;
        height: 60%;
        display: block;
      }
  `
  );
  
  function Hero() {
    return (
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Box
          // spacing={{ xs: 6, md: 10 }}
          justifyContent="center"
          alignItems="center"
          container
        >
          <Box item mx="auto"
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'>
            <Box
              display={['block', 'block', 'flex']}
              style={{ justifyContent: 'space-between' }}
            >
              <Box
                width={['100%', '100%', '50%']}>
                <Typography sx={{ mb: 2 }} variant="h3">
                  Better Days Cleaning Contractors
                </Typography>
                <Typography sx={{ mb: 2 }} variant="h5">
                  You Deserve a Beak
                </Typography>
                <Typography
                  sx={{ lineHeight: 1.5, pb: 4 }}
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                >
                  We delight in engaging with you by
                  offering you excellent and professional
                  cleaning services for residential and commercial premises.
                  Our regular training programs and refresher courses on
                  residential cleaning continue to be the best domestic cleaning
                  services company in Uganda.
  
                </Typography>
                <Typography
                  sx={{ lineHeight: 1.5, pb: 4 }}
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                >
                  We are a Premier first-class cleaning services
                  solutions Company in Uganda. Our team of professionals are fully trained, equipped
                  and insured, with our core operations in Uganda.
                </Typography>
                <Button
                  component={Link}
                  href="/dashboards/crypto"
                  size="large"
                  variant="contained"
                >
                  Read More
                </Button>
              </Box>
              <Box
                margin={['0', '0', '0 0 0 3rem ']}
                component='img'
                width={['100%', '100%', '50%']}
                height={['100%', '50%']}
                border='1px solid grey'
                src='/products/project3.jpg'
              />
  
            </Box>
           <Grid
           my={8}>
            <Typography variant='h3'>
              WHY CHOSE US
            </Typography>
            <Box spacing={3} mt={5}
              display={['block', 'flex']}
             >
              <Box>
                <Box item md={4}
                  margin={['2rem 0']}
                  display='flex'>
                  <MuiAvatar>
                    <img
                      src="/static/images/Serve/Eye.svg"
                      alt="full time"
                    />
                  </MuiAvatar>
                  <Typography variant="h4"
                  >
                    <Box sx={{ pb: 2 }}>
                      <b>Full time Supervisors (Material-UI)</b>
                    </Box>
                    <Typography component="span" variant="subtitle2">
                      Full time on-site Supervisor with solutions provided on the spot   </Typography>
                  </Typography>
                </Box>
                <Box item md={4}
                  margin={['2rem 0']}
                  display='flex'>
                  <NextJsAvatar>
                    <img src="/static/images/Serve/Cogs.svg" alt="trust" />
                  </NextJsAvatar>
                  <Typography variant="h4">
                    <Box sx={{ pb: 2 }}>
                      <b>Trust</b>
                    </Box>
                    <Typography component="span" variant="subtitle2">
                      Staying true to our clients and faithfully serving them is what has given us experience
                    </Typography>
                  </Typography>
                </Box>
                <Box item md={4}
                  margin={['2rem 0']}
                  display='flex'>
                  <JsAvatar>
                    <img
                      src="/static/images/Serve/Handshake.svg"
                      alt="affodable"
                    />
                  </JsAvatar>
                  <Box
                    >
                    <Typography variant="h4">
                      <Box sx={{ pb: 2 }}>
                        <b>Affordable Rates</b>
                      </Box>
                      <Typography component="span" variant="subtitle2">
                        Our prices are competitive and fair. There are no surprise bills.
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box 
              alignItems='center'
              display='flex'
              justifyContent='center'>
                <Box
                  component='img'
                  src='/products/project2.jpg'
                  width='70%'
                  height='40%'
                />
              </Box>
              <Box>
  
             <Box
             >
             <Box item md={4}
                  margin={['2rem 0']}
                  display='flex'>
                  <NextJsAvatar>
                    <img src="/static/images/logo/google.svg" alt="clean" />
                  </NextJsAvatar>
                  <Typography variant="h4">
                    <Box sx={{ pb: 2 }}>
                      <b>Custom Cleaning</b>
                    </Box>
                    <Typography component="span" variant="subtitle2">
                      We talk to you about your priorities and preferences and mix them with our time-tested methodology
                    </Typography>
                  </Typography>
                </Box> 
                 <Box item md={4}
                  margin={['2rem 0']}
                  display='flex'>
                  <MuiAvatar>
                    <img
                      src="/static/images/Serve/Apphis.svg"
                      alt="garantee"
                    />
                  </MuiAvatar>
                  <Typography variant="h4"
                  >
                    <Box sx={{ pb: 2 }}><b>24 Hour Guarantee </b>
                    </Box>
                    <Typography component="span" variant="subtitle2">
                      Specialist contractors on call at all times
                    </Typography>
                  </Typography>
                </Box>
  
                <Box item md={4}
                  margin={['2rem 0']}
                  display='flex'>
                  <JsAvatar>
                    <img
                      src="/static/images/Serve/Happy.svg"
                      alt="happy"
                    />
                  </JsAvatar>
                  <Box
                    >
                    <Typography variant="h4">
                      <Box sx={{ pb: 2 }}>
                        <b>Customer is King</b>
                      </Box>
                      <Typography component="span" variant="subtitle2">
                        Customers come first, We give you value for money and superior cleaning services.
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
             </Box>
              </Box>
            </Box>
           </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
  
  export default Hero;
  