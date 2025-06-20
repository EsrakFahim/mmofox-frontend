import Image from "next/image";
import ReviewCard from "./ReviewCard";
import clientImage from "@/public/Assets/fav.png";
import './Testimonial.scss'

const ReviewsSection = () => {
      const feedbackData = [
            {
                  client_name: "Alice Johnson",
                  client_position: "Marketing Manager",
                  review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.",
                  review_rate: 4.9,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Web Development",
            },
            {
                  client_name: "Bob Smith",
                  client_position: "CTO",
                  review: "good experience.Fantastic service!",
                  review_rate: 4.8,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Marketing",
            },
            {
                  client_name: "Clara Richards",
                  client_position: "Product Manager",
                  review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.",
                  review_rate: 4.7,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Video Editing",
            },
            {
                  client_name: "Daniel Green",
                  client_position: "CEO",
                  review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results",
                  review_rate: 5.0,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Graphic Design",
            },
            {
                  client_name: "Eve Campbell",
                  client_position: "Business Owner",
                  review: "The team demonstrated an impressive understanding of our project needs and delivered high-quality work on time. We are very satisfied with the collaboration.",
                  review_rate: 4.6,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Web Design",
            },
            {
                  client_name: "Frank Martin",
                  client_position: "Head of Operations",
                  review: "Shakhawat Hossain is a very professional and cooperative to deliver initiatives , for my business, I will continue with him to be our strategic SEO partner.",
                  review_rate: 4.9,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Marketing",
            },
            {
                  client_name: "Grace Lee",
                  client_position: "Project Coordinator",
                  review: "Fantastic service here, Gary will get more of my business directly and indirectly. Very quick, thorough, and thoughtful in designs. I am very happy with the results.",
                  review_rate: 4.8,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Graphic Design",
            },
            {
                  client_name: "Henry Taylor",
                  client_position: "Technical Lead",
                  review: "Once again, I'm happy with the finished project! Wasif spent a lot of time working with me to get the details right in the first video he edited. This made completion of the longer videos much easier. I'm happy to continue working with him.",
                  review_rate: 5.0,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Video Editing",
            },
            {
                  client_name: "Alice Johnson",
                  client_position: "Marketing Manager",
                  review: "He has been great to work with, he is very responsive and has helped us grow on google searches. His work is delivered on time and I would recommend his services to others.",
                  review_rate: 4.9,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Marketing",
            },
            {
                  client_name: "Isabella Morgan",
                  client_position: "Digital Marketing Head",
                  review: "The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results.The team did an exceptional job on our project. They were very responsive, and their attention to detail was outstanding. We’re thrilled with the final results",
                  review_rate: 4.7,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Marketing",
            },
            {
                  client_name: "Jack Rogers",
                  client_position: "Entrepreneur",
                  review: "Esrak Fahim and the team were great to work with. They communicated proactively, worked quickly, and made all the edits we needed to make sure the site looked just how we wanted. I would recommend them!",
                  review_rate: 4.9,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Web Development",
            },
            {
                  client_name: "Kelly Foster",
                  client_position: "HR Manager",
                  review: "Working with the team was easy! They were extremely helpful and helped me out no matter how big or small the ask was. I highly recommend them for any intricate website you need coded. 10/10 will definitely be using again. Thanks guys!",
                  review_rate: 4.8,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Web Development",
            },
            {
                  client_name: "Liam Bennett",
                  client_position: "Finance Director",
                  review: "Great attitude, amazing work, very professional, and super quick.",
                  review_rate: 5.0,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Web Development",
            },
            {
                  client_name: "Mia Collins",
                  client_position: "Senior Developer",
                  review: "Working with Rafsan has been a great experience. We ve been working together on many projects already. Very glad to have him support me.",
                  review_rate: 4.6,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Web Development",
            },
            {
                  client_name: "Noah White",
                  client_position: "Startup Founder",
                  review: "Great minimal designs and knows what will work with the logo. I’d recommend it to anyone looking for a logo.",
                  review_rate: 5.0,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Graphic Design",
            },
            {
                  client_name: "Olivia Brooks",
                  client_position: "Creative Director",
                  review: "He is a skilled editor, who takes the time to get my projects just the way I want them",
                  review_rate: 4.9,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Video Editing",
            },
            {
                  client_name: "Paul Adams",
                  client_position: "Product Designer",
                  review: "Thanks for these great and very fast work!",
                  review_rate: 4.8,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Graphic Design",
            },
            {
                  client_name: "Quinn Baker",
                  client_position: "UX/UI Specialist",
                  review: "This guy and his team will get it done. They were professional and worked around my schedule as much as they could.",
                  review_rate: 4.7,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Web Development",
            },
            {
                  client_name: "Rachel Carter",
                  client_position: "Freelance Consultant",
                  review: "I was highly impressed by the team’s ability to work under pressure and deliver high-quality results. Their dedication to client satisfaction was evident throughout.",
                  review_rate: 4.9,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Web Design",
            },
            {
                  client_name: "Samuel Evans",
                  client_position: "IT Manager",
                  review: "If you want your site to get worked on until it is complete to your liking this is where you come. I have received nothing to stellar service and work to get my very complicated sites done.",
                  review_rate: 5.0,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Web Development",
            },
            {
                  client_name: "Tina Harris",
                  client_position: "Art Director",
                  review: "Thank you so much to GalaxySpark and team for your exception SEO performance. After almost a year working with you and your team, I have to say I am very impressed and grateful to have found and to continue with you for the next many months to come. Please keep up the fantastic, high ranking keywords in our local area, revamping some of the pages of our site, optimizing local content, and much more. I highly recommend ",
                  review_rate: 4.7,
                  client_image: clientImage,
                  review_date: "2021-09-01",
                  service: "Marketing",
            },
      ];

      return (
            <div className="relative w-full min-h-screen text-white flex flex-col items-center justify-center px-4 overflow-hidden my-10">
                  {/* Background image div */}
                  <div className="bg-position-adjust" aria-hidden="true" />

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                              <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                                    style={{
                                          left: `${Math.random() * 100}%`,
                                          top: `${Math.random() * 100}%`,
                                          animationDelay: `${Math.random() * 3}s`,
                                          animationDuration: `${2 + Math.random() * 2}s`,
                                    }}
                              />
                        ))}
                  </div>

                  {/* Header */}
                  <div className="text-center mb-16 z-10">
                        <div className="flex items-center gap-4">
                              <Image src="/Group2.png" alt="Game Image" width={24} height={24} />
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textPrimary">
                                    Good Reviews All The Time
                              </h2>
                              <Image src="/Group2.png" alt="Game Image" width={24} height={24} />
                        </div>
                  </div>

                  {/* Reviews grid */}
                  <div className="w-full h-[80vh]  feedback_wrapper feedback-marquee">
                        {/* Grid container for feedback cards */}
                        <div className="feedback-marquee-group">
                              {feedbackData?.map((el, index) => {
                                    return (
                                          <div
                                                key={index}
                                                className="break-inside-avoid w-full p-4 mb-4 bg-cardPrimary border border-stroke h-fit inline-block rounded-2xl shadow-md feedback-card"
                                          >
                                                <div className="flex items-end gap-4">
                                                      <Image
                                                            src={
                                                                  el.client_image
                                                            }
                                                            alt={el.client_name}
                                                            width={50}
                                                            height={50}
                                                            className="w-[50px] h-[50px] rounded-full object-contain"
                                                      />
                                                      <div>
                                                            <h1 className="font-medium">
                                                                  {
                                                                        el.client_name
                                                                  }
                                                            </h1>
                                                            <p className="text-xs text-neutral-500">
                                                                  {
                                                                        el.client_position
                                                                  }
                                                            </p>
                                                      </div>
                                                </div>
                                                <div className="h-fit mt-4 text-textPrimary">
                                                      <p>{el.review}</p>
                                                </div>
                                                <div className="h-fit mt-4 text-textPrimary">
                                                      <p>
                                                            <span className="font-medium">
                                                                  Service:{" "}
                                                            </span>
                                                            {el.service}
                                                      </p>
                                                </div>
                                          </div>
                                    );
                              })}
                              {feedbackData?.map((el, index) => {
                                    return (
                                          <div
                                                key={`${index}-duplicate`}
                                                className="break-inside-avoid w-full p-4 mb-4 bg-cardPrimary border border-stroke h-fit inline-block rounded-2xl shadow-md feedback-card"
                                          >
                                                <div className="flex items-end gap-4">
                                                      <Image
                                                            src={
                                                                  el.client_image
                                                            }
                                                            alt={el.client_name}
                                                            width={50}
                                                            height={50}
                                                            className="w-[50px] h-[50px] rounded-full object-contain"
                                                      />
                                                      <div>
                                                            <h1 className="font-medium">
                                                                  {
                                                                        el.client_name
                                                                  }
                                                            </h1>
                                                            <p className="text-xs text-neutral-500">
                                                                  {
                                                                        el.client_position
                                                                  }
                                                            </p>
                                                      </div>
                                                </div>
                                                <div className="h-fit mt-4 text-textPrimary">
                                                      <p>{el.review}</p>
                                                </div>
                                                <div className="h-fit mt-4 text-textPrimary">
                                                      <p>
                                                            <span className="font-medium">
                                                                  Service:{" "}
                                                            </span>
                                                            {el.service}
                                                      </p>
                                                </div>
                                          </div>
                                    );
                              })}
                        </div>
                  </div>

            </div>
      );
};

export default ReviewsSection;
