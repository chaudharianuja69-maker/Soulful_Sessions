"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fadeUp } from "@/utils/animations";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\s-]+$/, "Invalid phone number format"),
  email: z.string().email("Please enter a valid email address"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  sessionType: z.string().min(1, "Please select a session type"),
  message: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const sessionTypes = [
  "Individual Therapy",
  "Couples Therapy",
  "Teen Therapy",
  "Corporate Workshop",
];

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

interface AppointmentFormProps {
  showSuccessModal?: boolean;
  className?: string;
}

export function AppointmentForm({
  showSuccessModal = true,
  className,
}: AppointmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Appointment submitted:", data);
    setIsSubmitting(false);

    if (showSuccessModal) {
      setShowSuccess(true);
    }
    reset();
  };

  return (
    <>
      <motion.form
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onSubmit={handleSubmit(onSubmit)}
        className={className}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Your full name"
              {...register("name")}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              placeholder="+91 93262 57650"
              {...register("phone")}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="sessionType">Session Type *</Label>
            <Select onValueChange={(value) => setValue("sessionType", value)}>
              <SelectTrigger aria-invalid={!!errors.sessionType}>
                <SelectValue placeholder="Select session type" />
              </SelectTrigger>
              <SelectContent>
                {sessionTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.sessionType && (
              <p className="text-sm text-destructive">
                {errors.sessionType.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredDate">Preferred Date *</Label>
            <Input
              id="preferredDate"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              {...register("preferredDate")}
              aria-invalid={!!errors.preferredDate}
            />
            {errors.preferredDate && (
              <p className="text-sm text-destructive">
                {errors.preferredDate.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredTime">Preferred Time *</Label>
            <Select onValueChange={(value) => setValue("preferredTime", value)}>
              <SelectTrigger aria-invalid={!!errors.preferredTime}>
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.preferredTime && (
              <p className="text-sm text-destructive">
                {errors.preferredTime.message}
              </p>
            )}
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell us briefly what brings you here..."
              {...register("message")}
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="mt-8 w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Book Appointment
            </>
          )}
        </Button>
      </motion.form>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="text-center sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <DialogTitle className="text-2xl">Appointment Request Sent!</DialogTitle>
            <DialogDescription className="text-base">
              Thank you for reaching out. Anuja Dange will confirm your
              appointment within 24 hours via phone or email.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowSuccess(false)} className="mt-4">
            Got it, thanks!
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
