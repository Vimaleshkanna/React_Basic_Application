import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div className="ui">
          <div className="message">
            <h2>Warning</h2>
            <p>Are You sure?</p>
          </div>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Vimalesh"
          timeAgo="Today at 5.00 P.M"
          content="Nice Post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Vishnu"
          timeAgo="Today at 3.00 P.M"
          content="I really loved it!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Hari"
          timeAgo="yesterday at 5.00 P.M"
          content="Nice Post"
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
