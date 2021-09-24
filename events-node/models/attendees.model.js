module.exports = mongoose => {
    const Attendees = mongoose.model(
      "Attendees",
      mongoose.Schema(
        {
          event: String,
          attendees: String,
          venue: String,
          startDate: Date,
          endDate: Date,
        },
        { timestamps: true }
      )
    );
  
    return Attendees;
  };