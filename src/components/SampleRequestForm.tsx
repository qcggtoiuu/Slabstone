import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as z from "zod";

interface SampleRequestFormProps {
  productName?: string;
  onSubmit?: (data: FormData) => void;
  isOpen?: boolean;
}

const formSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ tên"),
  company: z.string().min(1, "Vui lòng nhập tên công ty"),
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const SampleRequestForm = ({
  productName = "Premium Stone Sample",
  onSubmit = () => {},
  isOpen = true,
}: SampleRequestFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onFormSubmit = async (data: FormData) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <Card className="w-[400px] bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">
          Đặt mẫu sản phẩm: {productName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              Họ và tên <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Nhập họ và tên của bạn"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">
              Tên công ty <span className="text-red-500">*</span>
            </Label>
            <Input
              id="company"
              placeholder="Nhập tên công ty của bạn"
              {...register("company")}
            />
            {errors.company && (
              <p className="text-sm text-red-500">{errors.company.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Số điện thoại <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Nhập số điện thoại của bạn"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Ghi chú thêm</Label>
            <Textarea
              id="message"
              placeholder="Nhập yêu cầu cụ thể hoặc câu hỏi của bạn"
              className="min-h-[100px]"
              {...register("message")}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SampleRequestForm;
