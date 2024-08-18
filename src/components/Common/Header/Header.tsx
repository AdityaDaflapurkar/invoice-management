import { AppBar, Typography } from '@mui/material';

export interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  return (
    <AppBar component='nav' style={{ padding: 10, position: 'relative' }} className='header'>
      <Typography
        variant='h6'
        component='div'
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        {props.title}
      </Typography>
    </AppBar>
  );
}
