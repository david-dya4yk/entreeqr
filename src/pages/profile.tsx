import { ProfilePage } from "@/@pages/Profile";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default ProfilePage;
