import { Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface FooterButton {
  text: string;
  action: () => void;
  disabled: boolean;
}

export interface FooterProps {
  primary: FooterButton;
  secondary?: FooterButton;
}

const Footer = (props: FooterProps) => {
  const navigate = useNavigate();
  const defaultSecondary: FooterButton = {
    text: 'Back',
    action: () => {
      navigate(-1);
    },
    disabled: false,
  };

  const { primary } = props;
  const secondary = props.secondary || defaultSecondary;

  return (
    <Box
      sx={{
        padding: 2,
        borderTop: '1px solid #e0e0e0',
        backgroundColor: '#f5f5f5',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Grid paddingRight={4} container justifyContent='flex-end' spacing={2}>
        <Grid item>
          <Button variant='outlined' color='secondary' onClick={secondary.action}>
            {secondary.text}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            onClick={primary.action}
            disabled={primary.disabled}
          >
            {primary.text}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
