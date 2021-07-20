import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import MyPageLogo from "./MyPageLogo";
import ActivityRecord from "./ActivityRecord";
import BackButton from "./common/BackButton";

const useStyles = makeStyles((theme) => ({
  MypageRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  MypagePaper: {
    width: "500px",
    height: "725px",
    border: "3px solid",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
}));

const MyPage = ({ handleMypage }) => {
  const classes = useStyles();

  return (
    <div className={classes.MypageRoot}>
      <Paper elevation={3} className={classes.MypagePaper}>
        <div style={{ width: "100%" }}>
          <BackButton type="mypage" action={handleMypage} />
        </div>
        <div style={{ fontSize: "1.6em" }}>
          <p>학과 : 경북대학교 - 컴퓨터학부</p>
          <p>이메일 : haebak@knu.ac.kr</p>
        </div>
        <ActivityRecord />
      </Paper>
      <MyPageLogo />
    </div>
  );
};

export default MyPage;