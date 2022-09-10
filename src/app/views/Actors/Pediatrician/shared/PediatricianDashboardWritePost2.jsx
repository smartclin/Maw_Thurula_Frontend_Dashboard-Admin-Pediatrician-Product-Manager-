// import "../../admin/shared/pediatrician/CommonStyles.css"
import ImageuploadS from "./ImageuploadS";

export default function Write() {
    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <ImageuploadS/>
                </div>
                <div className="writeFormGroup">
          <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
          />
                </div>
            </form>
        </div>
    );
}
