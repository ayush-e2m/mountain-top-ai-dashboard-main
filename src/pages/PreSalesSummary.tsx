import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Send, BarChart3 } from "lucide-react";
import { toast } from "sonner";

const PreSalesSummary = () => {
    return (
        <div className="min-h-screen">
            <Sidebar />
            <div className="ml-80">
                <main className="container mx-auto px-4 py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold">Pre-Sales Call Summary</h1>
                        <p className="text-muted-foreground mt-2">
                            Generate comprehensive pre-sales summaries from website analysis
                        </p>
                    </div>

                    <Card className="w-full h-[60vh] flex items-center justify-center">
                        <CardContent className="flex flex-col items-center gap-4">
                            <BarChart3 className="h-16 w-16 text-muted-foreground opacity-50" />
                            <h2 className="text-2xl font-bold text-muted-foreground">Coming Soon</h2>
                            <p className="text-muted-foreground text-center max-w-md">
                                We are working hard to bring you this feature. Stay tuned for updates!
                            </p>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    );
};

export default PreSalesSummary;
