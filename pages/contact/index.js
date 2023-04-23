import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import {
  Grid,
  CardContent,
  Divider,
  Typography,
  TextareaAutosize,
  Card,
  CardHeader,
  List,
  ListItem,
  Button
} from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Settings, TrackChangesOutlined } from '@mui/icons-material';

function Forms() {
  const router = useRouter();
  const currentRoute = router.pathname;
 
  return (
    <>
      <Head>
        <title>Contact | Better Days</title>
      </Head>

      <Typography
        variant='h2' >
        Contact Better Days
      </Typography>
      <Card>
      
        <NextLink href="/dashboards/tasks" passHref>
          <Button
            className={
              currentRoute === '/dashboards/crypto' ? 'active' : ''
            }
            disableRipple
            component="a"
            startIcon={<Settings />}
          >
          </Button>
        </NextLink>
        <CardContent>
          <CardHeader
            title='Main Office' />
        </CardContent>
      </Card>


      <NextLink href="/components/cards" passHref>
        <Button
          className={
            currentRoute === '/components/cards' ? 'active' : ''
          }
          disableRipple
          component="a"
          startIcon={<Settings />}
        >
          Services
        </Button>
      </NextLink>

      <NextLink href="/components/forms" passHref>
        <Button
          className={
            currentRoute === '/components/forms' ? 'active' : ''
          }
          disableRipple
          component="a"
          startIcon={<TrackChangesOutlined />}
        >
          Contact Us
        </Button>
      </NextLink>
      <Box maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Typography
              variant='h3' >
              Any Questions
            </Typography>
            <Typography
              paragraph >
              Please send us mail and we shall respond immediately
            </Typography>
            <Divider />
            <CardContent>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' }
                }}
                noValidate
                autoComplete="off"
              >

                <div>
                  <div>
                    <TextField
                      fullWidth
                      type='text'
                      label="Username"
                      placeholder="betterdays"
                      variant="standard"
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      style={{
                        padding: '0 '
                      }}
                      required
                      type='number'
                      label="Phone number"
                      variant="standard"
                    />
                  </div>
                  <div>
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      placeholder='.....'
                      autoComplete="current-password"
                      variant="standard"
                    />
                  </div>
                  <div>
                    <TextareaAutosize
                      cols={40}
                      minRows={10}
                      placeholder='Talk to us'
                    />
                  </div>
                </div>
              </Box>
            </CardContent>
          </Grid>

        </Grid>
      </Box>
      <Footer />
    </>
  );
}

Forms.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Forms;
