import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateTutorial = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            {user.displayName}
        </div>
    );
};

export default UpdateTutorial;