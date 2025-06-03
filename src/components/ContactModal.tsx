import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ContactModal({
  triggerLabel = "Contact Us",
  title = "Contact Us",
  description = "Have a question or want to get in touch? Fill out the form below!",
  buttonClass = "",
}: {
  triggerLabel?: string;
  title?: string;
  description?: string;
  buttonClass?: string;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Simple math captcha: 3 + 4
  const correctAnswer = "7";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captcha.trim() !== correctAnswer) {
      setError("Oops! That's not the right answer. Try again.");
      return;
    }
    setError("");
    setSubmitted(true);
    // Here you would send the data to your backend or email service
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={buttonClass}>
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        {submitted ? (
          <div className="py-8 text-center text-emerald-600 font-semibold">
            Thanks for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              placeholder="Your message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <div>
              <label className="block text-sm mb-1 font-medium">What is 3 + 4? <span className="text-red-500">*</span></label>
              <Input
                type="text"
                required
                value={captcha}
                onChange={e => setCaptcha(e.target.value)}
                autoComplete="off"
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <DialogFooter>
              <Button type="submit" className="w-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold">Send</Button>
            </DialogFooter>
          </form>
        )}
        <DialogClose asChild>
          <Button variant="ghost" className="w-full mt-2">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}