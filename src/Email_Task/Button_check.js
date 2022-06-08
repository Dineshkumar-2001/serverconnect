import * as React from 'react';

import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';



export default function Test() {

  return (

      <div>

      <Button variant="contained">Contained</Button>

      <Button variant="contained" disabled>

        Disabled

      </Button>

      <Button variant="contained" >

        Link

      </Button>

      </div>

  );

}