import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";

export const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    country: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "Inphrone Newsletter Subscription";
    const body = `Hi Inphrone Team,

I would like to subscribe to the Inphrone newsletter and get exclusive updates.

My Details:
Name: ${formData.name}
Email: ${formData.email}
Gender: ${formData.gender}
Age: ${formData.age}
Country: ${formData.country}
City: ${formData.city}

Please add me to your mailing list for early access opportunities and insights into the future of entertainment.

Thank you!`;

    const mailtoLink = `mailto:inphrone@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto px-2 sm:px-4 lg:px-0 border border-primary/10 shadow-lg rounded-2xl transition-transform duration-500 hover:shadow-xl">
      <CardHeader className="text-center bg-gradient-to-br from-primary/10 to-secondary/10 px-6 py-8 rounded-t-2xl">
        <CardTitle className="text-2xl font-bold md:text-3xl">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Stay in the Loop
          </span>
        </CardTitle>
        <CardDescription className="text-sm mt-2 max-w-md mx-auto text-muted-foreground">
          Get exclusive updates, early access, and insights into the future of entertainment.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 sm:p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, gender: value }))
                }
              >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black dark:bg-black dark:text-white shadow-md rounded-md z-50">
  <SelectItem value="male">Male</SelectItem>
  <SelectItem value="female">Female</SelectItem>
  <SelectItem value="other">Other</SelectItem>
  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
</SelectContent>

              </Select>
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Your age"
                min={13}
                max={100}
                value={formData.age}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, age: e.target.value }))
                }
                required
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                type="text"
                placeholder="Your country"
                value={formData.country}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, country: e.target.value }))
                }
                required
              />
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                type="text"
                placeholder="Your city"
                value={formData.city}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, city: e.target.value }))
                }
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.gender ||
                !formData.age ||
                !formData.country ||
                !formData.city
              }
            >
              <Mail className="w-5 h-5 mr-2" />
              Subscribe
            </Button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-6">
          We respect your privacy. No spam. Unsubscribe anytime.
        </p>
      </CardContent>
    </Card>
  );
};
