/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Container, Typography, Button, keyframes } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RowingIcon from "@mui/icons-material/Rowing";

// Define animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

function NotFound() {
  return (
    <Container
      sx={{
        mx: "auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        animation: `${fadeIn} 0.8s ease-out`,
      }}
    >
      <RowingIcon
        sx={{
          width: 146,
          height: 146,
          animation: `${bounce} 1.5s infinite ease-in-out`,
          mb: 2,
        }}
      />
      <Typography
        variant="h2"
        color="primary"
        gutterBottom
        sx={{
          animation: `${fadeIn} 1s ease-out`, 
          animationDelay: "0.3s", 
        }}
      >
        404 - Page Not Found
      </Typography>
      <Typography
        variant="body1"
        color="secondary"
        gutterBottom
        sx={{
          animation: `${fadeIn} 1s ease-out`, 
          animationDelay: "0.5s", 
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        size="medium"
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        startIcon={<HomeIcon />}
        sx={{
          width: 1 / 2,
          mx: 2,
          mt: 3,
          animation: `${fadeIn} 1s ease-out`, 
          animationDelay: "0.7s",
          "&:hover": {
            transform: "scale(1.05)", 
            transition: "transform 0.3s ease",
          },
        }}
      >
        Back To Home
      </Button>
    </Container>
  );
}

export default NotFound;
