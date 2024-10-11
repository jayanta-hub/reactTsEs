import { LoadingOverlay, useMantineTheme } from "@mantine/core";

const Loading = (props: any) => {
  console.log("🚀 ~ Loading ~ props:", props);
  const theme = useMantineTheme();

  const isTrue = true;
  return (
    <>
      <LoadingOverlay
        visible={isTrue}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: theme.colors.greenNeon[7], type: "bars" }}
      />
    </>
  );
};

export default Loading;
