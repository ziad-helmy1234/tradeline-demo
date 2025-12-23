"use client";

import { useState } from "react";
import events from "@/data/community.json";
import { Star, MessageSquare, User } from "lucide-react";

export default function CommunityPage() {
  // Existing reviews state
  const [reviews, setReviews] = useState([
    { id: 1, user: "Alex M.", rating: 5, comment: "The iPhone 17 build quality is on another level. Tradeline's support was also super helpful!", date: "2 days ago" },
    { id: 2, user: "Sarah K.", rating: 4, comment: "Love the new ecosystem features. Comparing devices on this site made my choice much easier.", date: "1 week ago" },
  ]);

  const [newReview, setNewReview] = useState({ user: "", rating: 5, comment: "" });

  const handlePostReview = (e) => {
    e.preventDefault();
    if (!newReview.comment || !newReview.user) return;
    
    const reviewToAdd = {
      ...newReview,
      id: Date.now(),
      date: "Just now"
    };
    
    setReviews([reviewToAdd, ...reviews]);
    setNewReview({ user: "", rating: 5, comment: "" });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-28">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
          Tradeline Community
        </h1>
        <p className="opacity-70 max-w-2xl mx-auto">
          Join workshops, attend events, and share your experiences with the ecosystem.
        </p>
      </div>

      {/* Events Grid section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-card border border-card-border rounded-2xl p-6 hover:bg-foreground/5 transition"
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs border border-card-border opacity-80">
              {event.type}
            </span>
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="opacity-70 text-sm mb-4">{event.description}</p>
            <div className="text-sm opacity-60 space-y-1 mb-6">
              <p>📅 {event.date}</p>
              <p>⏰ {event.time}</p>
              <p>📍 {event.location}</p>
            </div>
            <button className="w-full bg-foreground text-background py-2 rounded-full text-sm font-medium hover:opacity-80 transition">
              Register
            </button>
          </div>
        ))}
      </div>

      <hr className="border-card-border mb-24" />

      {/* Community Reviews Section */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Write a Review */}
        <div className="md:col-span-1">
          <div className="sticky top-28 bg-card border border-card-border rounded-3xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquare size={20} /> Write a Review
            </h2>
            <form onSubmit={handlePostReview} className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-background border border-card-border focus:ring-1 focus:ring-foreground outline-none text-sm"
                value={newReview.user}
                onChange={(e) => setNewReview({...newReview, user: e.target.value})}
              />
              <div className="flex gap-2 text-yellow-500">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button 
                    key={num} 
                    type="button"
                    onClick={() => setNewReview({...newReview, rating: num})}
                  >
                    <Star fill={newReview.rating >= num ? "currentColor" : "none"} size={18} />
                  </button>
                ))}
              </div>
              <textarea 
                placeholder="Tell us about your experience..."
                rows="4"
                className="w-full p-3 rounded-xl bg-background border border-card-border focus:ring-1 focus:ring-foreground outline-none text-sm text-foreground"
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-foreground text-background py-3 rounded-xl font-bold hover:opacity-90 transition"
              >
                Post Review
              </button>
            </form>
          </div>
        </div>

        {/* Review Feed */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold mb-6">Latest Feedback</h2>
          {reviews.map((review) => (
            <div key={review.id} className="bg-card border border-card-border rounded-3xl p-6 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                    <User size={20} className="opacity-50" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{review.user}</p>
                    <p className="text-[10px] opacity-40 uppercase tracking-widest">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={14} />
                  ))}
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed italic">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}