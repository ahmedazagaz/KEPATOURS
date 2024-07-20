
export const createUser = async (req, res) => {
    try {
        // Check if a User with the same title already exists
        const existingUser = await User.findOne({ title: req.body.title });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: `A User with the title "${req.body.title}" already exists.`,
            });
        }

        // Create a new User
        const newUser = new User(req.body);
        const savedUser = await newUser.save();

        res.status(200).json({
            success: true,
            message: "Successfully created",
            data: savedUser,
        });
    } catch (err) {
        console.error("Error creating User:", err); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Failed to create. Try again",
            error: err.message,
        });
    }
};

// update User
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedUser,
        });
    } catch (err) {
        console.error("Error updating User:", err); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Failed to update",
            error: err.message,
        });
    }
};

// delete User
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "successfully deleted",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to delete",        });
    }
};

// getSingle User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
    const user = await User.findById(id);

    res.status(200).json({
            success: true,
            message: "successful ",
            data:user
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
         });
    }
};

// getAll User
export const getAllUser = async (req, res) => {

  try {
    const users = await User.find({})

    res
        .status(200)
        .json({ 
            success: true,
            message: "successful",
            data:users,
        });

 } catch (err) { 
    res.status(404).json({
         success: false,
         message: "not found",
 });
    }
};
