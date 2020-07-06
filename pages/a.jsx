import { withRouter } from "next/router";

const A = ({ router }) => {
    console.log(router)
  return (
    <div>{router.query.id}</div>
  );
};
export default withRouter(A);
