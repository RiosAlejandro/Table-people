import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							React test
						</Typography>
					</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
