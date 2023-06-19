import React, { FC } from "react";

type Props = {
  Title: string;
  Description: string;
};

const pageCard: FC<Props> = ({ Title, Description }) => {
  {
    return (
      <>
        <div className="row gy-5 g-xl-8">
          <div className="col-xxl-4 ">
            <div className="card card-xl-stretch mb-xl-8 ">
              <div className="card-header border-0 py-5">
                <h3 className="card-title fw-bolder">{Title}</h3>

                <p>{Description}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default pageCard;
