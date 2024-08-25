import { CircularProgress, Box } from '@mui/material';

export default function Loader() {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
      <CircularProgress />
    </Box>
  );
}
