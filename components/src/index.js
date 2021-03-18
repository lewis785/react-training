import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <div>
            <h4>Warning</h4>
            Are you sure you want to do this?
          </div>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Sam" 
            timeAgo="5 minutes ago"
            content="Nice blog post!"
            avata
            r={faker.image.image()}
          />
        </ApprovalCard> 
        <ApprovalCard>
          <CommentDetail 
          author="Alex" 
          timeAgo="Today at 6pm" 
          content="This is pretty cool" 
          avatar={faker.image.image()} 
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Jane"
            timeAgo="2 days ago" 
            content="I like trains" 
            avatar={faker.image.image()}
          />
        </ApprovalCard>
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"))