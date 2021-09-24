module.exports = mongoose => {
    const Members = mongoose.model(
      "members",
      mongoose.Schema(
        {
          firstName: String,
          lastName: String,
          email: String,
          gender: String,
          city: String,
          country: String,
          memberSince: Date,
          active: Boolean,
          removed: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Members;
  };