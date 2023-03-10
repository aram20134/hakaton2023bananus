import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';

export const CustomerListToolbar = ({value, setValue, title, placeholder}) => (
  <Box>
    <Box sx={{alignItems: 'center',display: 'flex',justifyContent: 'space-between',flexWrap: 'wrap',m: -1}}>
      <Typography sx={{ m: 1 }} variant="h4">
        {title}
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="small">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder={placeholder}
              variant="outlined"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
