import { Box, Typography } from "@mui/material";

interface Desc {
  title: string;
  icon: string;
}

interface Props {
  data: Desc[];
}

const ScriptDescription = ({ data }: Props) => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        marginTop="10px"
        sx={{ width: { xs: "100%" } }}
      >
        {data.map((item) => (
          <Box key={item.title}>
            <Box
              display="flex"
              justifyContent="space-between"
              marginBottom="10px"
              alignItems="center"
            >
              <Typography
                variant="h6"
                color="rgb(152, 152, 152)"
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              >
                {item.title}
              </Typography>
              <Box
                sx={{
                  marginLeft: "10px",
                  borderRadius: "5px",
                  backgroundColor: "rgb(255, 51, 51)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 8px",
                  width: "fit-content",
                }}
              >
                <Typography color="white" fontWeight="600" fontSize="14px" sx={{display:{xs:"none", sm:"block"}}}>
                  {item.icon}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default ScriptDescription;
