import React from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface SampleRequestFormProps {
  productName?: string;
  onSubmit?: (data: FormData) => void;
  isOpen?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  appointmentDate: Date;
  message: string;
}

const SampleRequestForm = ({
  productName = "Premium Stone Sample",
  onSubmit = () => {},
  isOpen = true,
}: SampleRequestFormProps) => {
  const { register, handleSubmit, setValue, watch } = useForm<FormData>();
  const appointmentDate = watch("appointmentDate");

  const onFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  if (!isOpen) return null;

  return (
    <Card className="w-[400px] bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Request Sample: {productName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              {...register("name")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone")}
            />
          </div>

          <div className="space-y-2">
            <Label>Preferred Appointment Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {appointmentDate ? (
                    format(appointmentDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={appointmentDate}
                  onSelect={(date) => setValue("appointmentDate", date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Notes</Label>
            <Textarea
              id="message"
              placeholder="Any specific requirements or questions?"
              className="min-h-[100px]"
              {...register("message")}
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SampleRequestForm;
