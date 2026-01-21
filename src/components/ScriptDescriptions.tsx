import { Box, Typography } from "@mui/material";

interface DescriptionItem {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  data: DescriptionItem[];
}

const ScriptDescriptions = ({ data }: Props) => {
  return (
    <Box display="flex" marginTop="20px" marginBottom="10px">
      {data.map((item) => (
        <Box key={item.title} paddingRight="100px" marginBottom="10px">
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="5px"
            alignItems="baseline"
          >
            <Typography variant="h6">{item.title}</Typography>
            <Box
              borderRadius="10px"
              width="10%"
              sx={{
                backgroundColor: "rgb(255, 51, 51)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography color="white" fontWeight="600" fontSize="18px">
                {item.icon}
              </Typography>
            </Box>
          </Box>
          <Typography
            justifyContent="flex-start"
            variant="body1"
            width="80%"
            color="rgb(131, 131, 131)"
          >
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ScriptDescriptions;
