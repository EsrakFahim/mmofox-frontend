interface ReviewCardProps {
      name: string;
      rating: number;
      review: string;
      avatar: string;
      position?:
      | "top-left"
      | "top-right"
      | "middle-left"
      | "middle-right"
      | "bottom-left"
      | "bottom-right"
      | "circular";
      style?: React.CSSProperties;
}

const ReviewCard = ({ name, rating, review, avatar, position = "circular", style }: ReviewCardProps) => {
      const positionClasses = {
            "top-left": "absolute top-16 left-4 lg:left-12",
            "top-right": "absolute top-16 right-4 lg:right-12",
            "middle-left": "absolute top-1/2 left-4 lg:left-12 transform -translate-y-1/2",
            "middle-right": "absolute top-1/2 right-4 lg:right-12 transform -translate-y-1/2",
            "bottom-left": "absolute bottom-16 left-4 lg:left-12",
            "bottom-right": "absolute bottom-16 right-4 lg:right-12",
            "circular": "absolute w-64"
      };

      const cardClasses = position === "circular"
            ? "w-64 bg-white/10 backdrop-blur-md rounded-2xl p-5 flex items-start space-x-4 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            : `${positionClasses[position]} bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 max-w-xs w-full mx-auto lg:mx-0 animate-fade-in`;

      if (position === "circular") {
            return (
                  <div className="flex">
                        <div className="relative flex-shrink-0">
                              <img
                                    src={avatar}
                                    alt={name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30 shadow-lg"
                                    style={{ aspectRatio: "1 / 1" }}
                              />
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex-1">
                              <div className="flex items-center space-x-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                          // Replace with your Star icon or similar
                                          <div key={i} className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                                    ))}
                                    <span className="ml-2 text-sm font-medium text-yellow-400">{rating}.0</span>
                              </div>
                              <p className="text-sm leading-relaxed mb-3 text-white/90 font-medium">{review}</p>
                              <div className="text-xs text-white/70 font-semibold uppercase tracking-wide">{name}</div>
                        </div>
                  </div>
            );
      }

      return (
            <div className="">
                  <div className="flex items-center gap-3 mb-3">
                        <img
                              src={avatar}
                              alt={name}
                              className="w-10 h-10 rounded-full object-cover"
                              style={{ aspectRatio: "1 / 1" }}
                        />
                        <div>
                              <h4 className="text-white font-medium text-sm">{name}</h4>
                              <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                          // Replace with your Star icon or similar
                                          <div key={i} className={`w-3 h-3 rounded-sm ${i < rating ? 'bg-yellow-400' : 'bg-gray-600'}`}></div>
                                    ))}
                                    <span className="text-yellow-400 text-sm ml-1">{rating}.0</span>
                              </div>
                        </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{review}</p>
            </div>
      );
};

export default ReviewCard;
