module.exports = mongoose => {
    const Events = mongoose.model(
      "events",
      mongoose.Schema(
        {
          title: String,
          description: String,
          active: Boolean,
          venue: String,
          startDate: Date,
          endDate: Date,
        },
        { timestamps: true }
      )
    );
  
    return Events;
  };