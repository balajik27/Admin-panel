// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// // Import jQuery Slim
// import 'jquery/dist/jquery.slim.min.js';


export function FAQ(){
    return(
        <>


        {/* modal start */}


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{height:'356px'}}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form>
      <div className="modal-body">
        <label>Answer:</label>
       <textarea cols="60" rows="6"></textarea>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
      </form>
    </div>
  </div>
</div>

{/* modal end */}

        <section id="faq" className="mb-5">
        <h2 className="fw-bolder mt-3" style={{textAlign:'center'}}>Frequently Asked Questions</h2>
  <div className="container mt-3">
  
    <div className="row">
    <div className="col-lg-1 col-12 col-md-12 col-sm-12"></div>
      <div className="col-lg-10 col-12 col-md-12 col-sm-12">
        <div className="accordion" id="accordionExample">
          <div
            className="card shadow-lg p-3 mb-3 bg-white rounded"
            data-aos="zoom-out"
            data-aos-duration="800"
          >
            <h2 className="mb-0">
              <button
                className="btn btn-light text-left"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                1. Non consectetur a erat nam at lectus urna duis?
              </button>
              <button className="btn btn-danger rounded-pill float-end h6 ">Edit</button>

              <span className=" text-success float-end h6 my-2 me-3"> <i className="fa-solid fa-check"></i> Answered</span>
            </h2>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="card-body">
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                magna fringilla urna porttitor rhoncus dolor purus non.
              </div>
            </div>
          </div>

          <div
            className="card shadow-lg p-3 mb-3 bg-white rounded"
            data-aos="zoom-out"
            data-aos-duration="900"
          >
            <h2 className="mb-0">
              <button
                className="btn btn-light text-left collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. Feugiat scelerisque varius morbi enim nunc faucibus a
                pellentesque?
              </button>
              <button className="btn btn-danger rounded-pill float-end h6 ">Edit</button>

              <span className="text-success float-end h6 my-2 me-3"> <i className="fa-solid fa-check"></i> Answered</span>

            </h2>

            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="card-body">
                Dolor sit amet consectetur adipiscing elit pellentesque
                habitant morbi. Id interdum velit laoreet id donec ultrices.
                Fringilla phasellus faucibus scelerisque eleifend donec
                pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                ultrices eros in cursus turpis massa tincidunt dui.
              </div>
            </div>
          </div>

          <div
            className="card shadow-lg p-3 mb-3 bg-white rounded"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <h2 className="mb-0">
              <button
                className="btn btn-light text-left collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. Dolor sit amet consectetur adipiscing elit pellentesque?
              </button>
              <button className="btn btn-danger rounded-pill float-end h6 ">Edit</button>

              <span className=" text-success float-end h6 my-2 me-3"> <i className="fa-solid fa-check"></i> Answered</span>

            </h2>

            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="card-body">
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                pellentesque eu tincidunt. Lectus urna duis convallis convallis
                tellus. Urna molestie at elementum eu facilisis sed odio morbi
                quis
              </div>
            </div>
          </div>

          <div
            className="card shadow-lg p-3 mb-3 bg-white rounded"
            data-aos="zoom-out"
            data-aos-duration="1100"
          >
            <h2 className="mb-0">
              <button
                className="btn btn-light text-left collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                4. Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              </button>
              <button className="btn btn-primary rounded-pill float-end h6 " data-bs-toggle="modal" data-bs-target="#exampleModal">Answer</button>

              <span className=" text-warning float-end h6 my-2 me-3"> <i className="fa-solid fa-circle-exclamation"></i> Pending</span>

            </h2>

            {/* <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="card-body">
                Dolor sit amet consectetur adipiscing elit pellentesque
                habitant morbi. Id interdum velit laoreet id donec ultrices.
                Fringilla phasellus faucibus scelerisque eleifend donec
                pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                ultrices eros in cursus turpis massa tincidunt dui.
              </div>
            </div> */}
          </div>

          <div
            className="card shadow-lg p-3 mb-3 bg-white rounded"
            data-aos="zoom-out"
            data-aos-duration="1200"
          >
            <h2 className="mb-0">
              <button
                className="btn btn-light text-left collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                5. Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              </button>
              <button className="btn btn-primary rounded-pill float-end h6 " data-bs-toggle="modal" data-bs-target="#exampleModal">Answer</button>

              <span className=" text-warning float-end h6 my-2 me-3"> <i className="fa-solid fa-circle-exclamation"></i> Pending</span>

            </h2>

            {/* <div
              id="collapseFive"
              className="collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="card-body">
                Dolor sit amet consectetur adipiscing elit pellentesque
                habitant morbi. Id interdum velit laoreet id donec ultrices.
                Fringilla phasellus faucibus scelerisque eleifend donec
                pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                ultrices eros in cursus turpis massa tincidunt dui.
              </div>
            </div> */}
          </div>
          
          <div
            className="card shadow-lg p-3 mb-3 bg-white rounded"
            data-aos="zoom-out"
            data-aos-duration="1300"
          >
            <h2 className="mb-0">
              <button
                className="btn btn-light text-left collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                6. Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              </button>
              <button className="btn btn-primary rounded-pill float-end h6 " data-bs-toggle="modal" data-bs-target="#exampleModal">Answer</button>

              <span className=" text-warning float-end h6 my-2 me-3"> <i className="fa-solid fa-circle-exclamation"></i> Pending</span>

            </h2>

            {/* <div
              id="collapseFive"
              className="collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="card-body">
                Dolor sit amet consectetur adipiscing elit pellentesque
                habitant morbi. Id interdum velit laoreet id donec ultrices.
                Fringilla phasellus faucibus scelerisque eleifend donec
                pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                ultrices eros in cursus turpis massa tincidunt dui.
              </div>
            </div> */}
          </div>
          <div
            className="card shadow-lg p-3 mb-3 bg-white rounded"
            data-aos="zoom-out"
            data-aos-duration="1400"
          >
            <h2 className="mb-0">
              <button
                className="btn btn-light text-left collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                7. Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              </button>
              <button className="btn btn-primary rounded-pill float-end h6 " data-bs-toggle="modal" data-bs-target="#exampleModal">Answer</button>

              <span className=" text-warning float-end h6 my-2 me-3"> <i className="fa-solid fa-circle-exclamation"></i> Pending</span>

            </h2>

            {/* <div
              id="collapseFive"
              className="collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="card-body">
                Dolor sit amet consectetur adipiscing elit pellentesque
                habitant morbi. Id interdum velit laoreet id donec ultrices.
                Fringilla phasellus faucibus scelerisque eleifend donec
                pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                ultrices eros in cursus turpis massa tincidunt dui.
              </div>
            </div> */}
          </div>

        </div>
      </div>
      <div className="col-lg-1 col-12 col-md-12 col-sm-12"></div>
    </div>
  </div>
</section>

     

        </>
    )
}